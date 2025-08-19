"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast, Toaster } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage, } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroupCustomTextArea } from "./toggle-group-custom-textarea"
import { Dispatch, SetStateAction } from "react"

type TextAreaProps = {
	placeholder: string;
	setSelectedOption: (data: z.infer<typeof FormSchema>) => void;
}

export const FormSchema = z.object({
	post: z.string().min(10, { message: "Seu post deve ter no mínimo 10 caractéres.", })
		.max(600, { message: "Você só tem 600 caracteres :(", })
})

export const TextareaForm = ({ placeholder, setSelectedOption }: TextAreaProps) => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	})



	return (
		<Form {...form}>
			<Toaster />
			<form onSubmit={form.handleSubmit(setSelectedOption)} className="w-full space-y-2 text-3xl">
				<FormField
					control={form.control}
					name="post"
					render={({ field }) => (
						<FormItem className="text-3xl">
							<FormControl className="text-3xl">
								<Textarea
									placeholder={placeholder}
									className="
									resize-none 
									rounded-none
									font-roboto
									w-full 
									h-full
                                    border-t-transparent
									border-l-transparent
									border-r-transparent 
									font-light
									placeholder:text-2xl
                                    !text-2xl 
									!leading-relaxed

									focus:!ring-0 
									focus:!outline-none 
									focus-visible:!ring-0 
									focus-visible:!outline-none
									"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex justify-between">
					<Button type="submit" className="bg-purple-primary-text hover:bg-purple-secondary text-white">Postar</Button>

					<ToggleGroupCustomTextArea />



				</div>

			</form>
		</Form>
	)
}
