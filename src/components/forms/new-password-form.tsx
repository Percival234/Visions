'use client';

import { z } from 'zod';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  currentPassword: z
    .string()
    .min(8, 'Мінімальна довжина 8 символів')
    .max(16, 'Максимальна довжина 16 символів'),
  newPassword: z
    .string()
    .min(8, 'Мінімальна довжина 8 символів')
    .max(16, 'Максимальна довжина 16 символів'),
});

type Schema = z.infer<typeof formSchema>;

export const NewPasswordForm = () => {
  const form = useForm<Schema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
    },
  });

  function onSubmit(values: Schema) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form className="w-80 space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="space-y-2">
                  <Label htmlFor="current-password">Поточний пароль</Label>
                  <Input id="current-password" type="password" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="space-y-2">
                  <Label htmlFor="new-password">Новий пароль</Label>
                  <Input id="new-password" type="password" {...field} />
                </div>
              </FormControl>
              <FormDescription>Довжина 6-18 символів</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Зберегти</Button>
      </form>
    </Form>
  );
};

// TODO SET PASSWORD EYE AND TYPE INPUT "PASSWORD" in RESET-PASS LOGIN REGISTER AND NEW PASS
// TODO ALL FORM BUTTONS ADD SPIN ANIMATION AND SERVER ERROR HANDLER FOR MESSAGE
