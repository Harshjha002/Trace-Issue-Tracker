'use client';
import { Button, TextField } from '@radix-ui/themes';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import MDEditor from '@uiw/react-md-editor';
import axios from "axios"
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router=useRouter()

  return (
    <form
    className="max-w-xl space-y-4"
    onSubmit={handleSubmit(async (data) => {
      try {
        await axios.post('/api/issues', data);
        router.push('/issues'); 
      } catch (error) {
        console.error('Failed to submit issue:', error); 
      }
    })}
  >
      <TextField.Root placeholder="Title" {...register('title')}>
      </TextField.Root>
      <div data-color-mode='light'>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <MDEditor value={field.value} onChange={field.onChange} />
          )}
        />
      </div>
      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
