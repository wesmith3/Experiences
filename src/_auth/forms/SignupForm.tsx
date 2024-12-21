import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "../../components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "../../components/ui/input"
import { useForm } from "react-hook-form"
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
})

function SignupForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div>
      <Button>Click Me</Button>
    </div>
  )
}

export default SignupForm
