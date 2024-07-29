'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Mark } from '../ui/mark';
import { Input } from '../ui/input';
import { Title } from '../ui/title';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ROUTES } from '@/constants/pages-url.constant';

const formSchema = z.object({
  email: z.string().min(1, 'This field is required').email('This is not a valid email.'),
  password: z.string().min(1, 'This field is required'),
});

type Schema = z.infer<typeof formSchema>;

export const SignInForm = () => {
  const form = useForm<Schema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: Schema) {
    console.log(values);
  }

  return (
    <div>
      <Title size="h1" className="text-center mb-8">
        <Mark color="violet">Sign in</Mark>
      </Title>
      <Form {...form}>
        <form className="w-80 grid">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-2">
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage>{}</FormMessage>
                <FormDescription>
                  <Link
                    className="hover:underline active:underline focus:underline"
                    href={ROUTES.AUTH.PASSWORD_RESET}>
                    Forgot password?
                  </Link>
                </FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit">Sign in</Button>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline">Sign in</Button>
            <Button variant="outline">Sign in</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
