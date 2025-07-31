'use client';
import { Button } from '../../ui/button';
import { Checkbox } from '../../ui/checkbox';
import { toast } from 'sonner';
import { Form } from '../../ui/form';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"

export default function CountryForm() {
  const Items = [
    { name: 'USA', id: 2 },
    { name: 'Canada', id: 3 },
    { name: 'Japan', id: 4 },
    { name: 'China', id: 5 },
  ];

  const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

 // bass use this function to fetch the data 
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
     
    toast('You submitted the following values', {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">success</code>
        </pre>
      ),
    });
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["name", "id"],
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="w-1/3">
        <ul>
          {Items.map((i) => (
            <li className="w-1/4 flex flex-row justify-between" key={i.id}>
              {i.name} <Checkbox value={i.id} />
            </li>
          ))}
        </ul>
        <Button type="submit" className="bg-blue-600">
          Submit
        </Button>
      </form>
    </Form>
  );
}

