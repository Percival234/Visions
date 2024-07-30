'use client';

import { z } from 'zod';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Mark } from '../ui/mark';
import { Input } from '../ui/input';
import { Title } from '../ui/title';
import { Button } from '../ui/button';

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
    <div className="flex flex-col items-center justify-center gap-6">
      <Title size="h1">
        <Mark color="violet">Sign in</Mark>
      </Title>
      <Form {...form}>
        <form className="w-80 grid" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
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
          <div className="py-4 relative flex items-center justify-center">
            <div className="absolute bg-background px-2 leading-none text-sm text-muted-foreground">
              or
            </div>
            <hr className="h-[2px] bg-muted w-full" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline">
              <Image
                src="http://localhost:3333/google-logo.svg"
                alt="Google logo"
                width={20}
                height={20}
              />
            </Button>
            <Button variant="outline">
              <Image
                src="http://localhost:3333/facebook-logo.svg"
                alt="Google logo"
                width={20}
                height={20}
              />
            </Button>
            <Button className="col-span-2" asChild variant="link">
              <Link href={ROUTES.AUTH.SIGN_UP}>Create an account</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
