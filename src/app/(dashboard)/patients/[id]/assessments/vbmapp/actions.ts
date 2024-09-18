import { api } from "@/lib/api";

export const saveVbmappQuestions = async (
  previousState: any,
  formData: FormData
) => {
  const questionResults = Object.fromEntries(formData);
  const patient_id = questionResults.patient_id
  delete questionResults['patient_id']

  const request = { patient_id: patient_id, answers: questionResults };
  console.log(request)

  try {
    const response = await api().post('api/assessments-applications', request);
    console.log("Dados enviados com sucesso:", response.data);
  } catch (error) {
    console.error("Erro ao enviar dados:", error);
  }
};