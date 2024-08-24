import { isValiError } from "valibot";

const parseToObject = (error: unknown) => {
  if (isValiError(error)) {
    return { error: true, message: error.issues[0].message };
  }

  if (error instanceof Error) {
    return { error: true, message: error.message };
  }

  return { error: true, message: "Algo não deu certo." };
};

export const errorTransforms = {
  parseToObject,
};
