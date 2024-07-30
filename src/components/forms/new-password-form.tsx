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
import { Input } from '../ui/input';
import { Title } from '../ui/title';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Paragraph } from '../ui/paragrah';

const formSchema = z.object({
  currentPassword: z
    .string()
    .min(8, 'Min lenght is 8 characters')
    .max(16, 'Max length is 16 characters'),
  newPassword: z
    .string()
    .min(8, 'Min lenght is 8 characters')
    .max(16, 'Max length is 16 characters'),
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
                  <Label htmlFor="current-password">Current password</Label>
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
                  <Label htmlFor="new-password">New password</Label>
                  <Input id="new-password" type="password" {...field} />
                </div>
              </FormControl>
              <FormDescription>The length should be 8-16 characters</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  );
};

// TODO SET PASSWORD EYE AND TYPE INPUT "PASSWORD" in RESET-PASS LOGIN REGISTER AND NEW PASS
// TODO ALL FORM BUTTONS ADD SPIN ANIMATION AND SERVER ERROR HANDLER FOR MESSAGE
