'use client';

import Link from 'next/link';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IAxiosError } from '@/types/axios-error.type';
import { signInFormSchema, SignInFormSchema } from './sign-in-form-schema';

import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SignInFormAlternative } from './sign-in-form-alternative';

import { usersService } from '@/services/user.service';

import { ROUTES } from '@/constants/pages-url.constant';

export const SignInFormFields = () => {
  const router = useRouter();
  const form = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { formState, setError, handleSubmit, control } = form;
  const { isSubmitting, errors } = formState;

  const onSubmit: SubmitHandler<SignInFormSchema> = async (values) => {
    try {
      const response = await usersService.signIn(values);
      toast.success(response.message);
      router.push(ROUTES.MAIN.HOME);
    } catch (error) {
      const axiosError = error as IAxiosError;
      const errorMessage = axiosError.response?.data?.message;

      if (errorMessage) {
        setError('root', {
          type: 'manual',
          message: errorMessage,
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form className="w-80 grid" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormControl>
                <Input placeholder="Електронна адреса" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem className="mb-3">
              <FormControl>
                <Input type="password" placeholder="Пароль" {...field} />
              </FormControl>
              <FormMessage />
              <FormDescription>
                <Link
                  className="hover:underline active:underline focus:underline"
                  href={ROUTES.AUTH.PASSWORD_RESET}>
                  Забули пароль?
                </Link>
              </FormDescription>
            </FormItem>
          )}
        />
        <FormMessage className="mb-4">{errors.root?.message}</FormMessage>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <span className="animate-spin w-5 h-5 rounded-full border-[3px] border-solid border-background/50 border-r-background"></span>
              Обробка
            </div>
          ) : (
            'Вхід'
          )}
        </Button>
        <SignInFormAlternative />
      </form>
    </Form>
  );
};
