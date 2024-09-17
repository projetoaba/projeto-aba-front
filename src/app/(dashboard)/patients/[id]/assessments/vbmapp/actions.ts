import { api } from "@/lib/api";


export const saveVbmappQuestions = async (
  previousState: any,
  formData: FormData
) => {
  const respostas = formData.get('answers');
  const request = { patient_id: '', answers: respostas };

  try {
    const response = await api().post('api/application-assessments', request);
    console.log("Dados enviados com sucesso:", response.data);
  } catch (error) {
    console.error("Erro ao enviar dados:", error);
  }
};