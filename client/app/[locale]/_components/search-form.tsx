'use client';
import { SearchFormSchema } from '@/schemas';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';
import SearchInput from './search-input';
import SearchButton from './search-button';

const SearchForm = ({ setOpenSearchBox }: { setOpenSearchBox: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const router = useRouter();
  const { handleSubmit, errors, isSubmitting, values, handleChange, handleBlur, resetForm } = useFormik({
    initialValues: {
      query: '',
    },
    validate: (values) => {
      const parsed = SearchFormSchema.safeParse(values);
      if (parsed.success) return {};
      return { query: parsed.error.issues[0]?.message || 'Invalid' };
    },
    onSubmit: async (values) => {
      setOpenSearchBox(false);
      resetForm();
      router.push(`/search?query=${values.query}`);
    },
  });
  return (
    <>
      {errors.query && <p className='text-center capitalize text-red-500 mb-2'>{errors.query}</p>}
      <form
        onSubmit={handleSubmit}
        className='w-full space-y-3'>
        <SearchInput
          value={values.query}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
        <SearchButton isSubmitting={isSubmitting} />
      </form>
    </>
  );
};

export default SearchForm;
