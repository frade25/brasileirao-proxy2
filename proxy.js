export default async function handler(request, response) {
  try {
    const res = await fetch('https://api.sofascore.com/api/v1/unique-tournament/brasileirao-serie-a/season/72034/events');
    const data = await res.json();

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: 'Erro ao buscar dados da API.' });
  }
}
