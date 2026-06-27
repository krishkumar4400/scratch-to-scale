import { safeParse } from "zod";

export const validate = async (req,res) => {
    try {
        const result = safeParse(req.body);

        if(!result.success) {
            console.error(result.error.issues);
            return res.status(400).json({
                message: "Input format is not correct",
                success: false 
            });
        }
    } catch (error) {
        console.error(error.message);
    }
}
