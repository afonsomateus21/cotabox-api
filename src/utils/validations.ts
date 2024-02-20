import { ApolloError } from "apollo-server";
import User from "../models/user";

export async function isSumParticipationLessOrEqualTo100(participation: number) {
  const participationSum = await User.aggregate([
    {
      $group: {
        _id: null,
        sumParticipation: { $sum: '$participation' }
      }
    }
  ]);

  if (participationSum[0]?.sumParticipation + participation > 100) {
    throw new ApolloError(
      "Erro ao cadastrar usuário: soma das participações maior que 100%",
      "BAD_REQUEST"
    );
  }

  return true;
}

export function isFirstNameAndLastNameValid(firstName: string, lastName: string) {
  const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;

  if (regex.test(firstName) && regex.test(lastName)) {
    return true;
  }

  throw new ApolloError(
    "Erro ao cadastrar usuário: firstName ou lastName possuem caracteres inválidos",
    "BAD_REQUEST"
  );
}