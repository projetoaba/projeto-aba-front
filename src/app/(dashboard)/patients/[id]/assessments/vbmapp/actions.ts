import { api } from "@/lib/api";
import { errorTransforms } from "@/lib/transforms/error";
import { redirect } from "next/navigation";
import router from 'next/router'

export const saveVbmappQuestions = async (
  previousState: any,
  formData: FormData
) => {
  const questionResults = Object.fromEntries(formData);
  const patient_id = questionResults.patient_id
  const finish = questionResults.finish
  delete questionResults['patient_id']
  delete questionResults['finish']
  const request = { patient_id: patient_id, answers: questionResults };

  try {
    console.log("Dados enviados::", request);    
    const response = await api().post('api/assessments-applications', request);
    console.log("Dados enviados com sucesso:", response.data);    
    return response.data
  } catch (error: unknown) {
    console.error("Erro ao enviar dados:", error);
    return errorTransforms.parseToObject(error);
  }
};