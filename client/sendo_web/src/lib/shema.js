import * as z from "zod";
import { validator } from "./validator";

export const LoginSchema = z.object({
  phone: z
    .string()
    .min(1, {
      message: "Số điện thoại không được để trống",
    })
    .regex(validator.password, "Số điện thoại không đúng định dạng."),
});
