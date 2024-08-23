"use server";
import * as v from "valibot";
import { VbmappQuestion } from "./components/questions";
import { errorTransforms } from "@/lib/transforms/error";

const VbmappQuestionsSchema = v.object(
  v.entriesFromList(
    Object.values(VbmappQuestion),
    v.string("Você deve responder todas as perguntas.")
  )
);

export type VbmappQuestions = v.InferOutput<typeof VbmappQuestionsSchema>;

export const saveVbmappQuestions = async (
  previousState: any,
  formData: FormData
) => {
  try {
    const questionResults = Object.fromEntries(formData);

    return { data: v.parse(VbmappQuestionsSchema, questionResults) };
  } catch (error: unknown) {
    console.log(error);

    return errorTransforms.parseToObject(error);
  }
};
