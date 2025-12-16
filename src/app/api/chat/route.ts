import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || !message.trim()) {
      return NextResponse.json(
        { response: 'Por favor, envía un mensaje válido.' },
        { status: 400 }
      );
    }

    // Use environment variable for API key
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      console.error('GEMINI_API_KEY no está configurada');
      return NextResponse.json(
        { response: 'Error: API no configurada correctamente.' },
        { status: 500 }
      );
    }

    // Call Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: message,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 500,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Gemini API Error:', errorData);
      return NextResponse.json(
        { response: 'Error al procesar tu solicitud. Intenta de nuevo.' },
        { status: 500 }
      );
    }

    const data = await response.json();

    // Extract text from response
    const generatedText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      'No pude generar una respuesta.';

    return NextResponse.json({
      response: generatedText,
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { response: 'Hubo un error al procesar tu solicitud.' },
      { status: 500 }
    );
  }
}
