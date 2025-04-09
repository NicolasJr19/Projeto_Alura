// Pega a URL da variável de ambiente com prefixo aceito pelo Parcel
const API_URL = process.env.PARCEL_API_URL;

// Função para buscar os dados do endpoint
export default async function fetchImages() {
  try {
    console.log("Buscando dados de:", API_URL); // opcional, para debug
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}
