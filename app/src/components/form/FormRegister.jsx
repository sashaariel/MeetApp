import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z
  .object({
    username: z.string().min(5, { message: 'Must be 5 or more characters long' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string(),
    confirmpassword: z.string()
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords don't match",
    path: ['confirmpassword']
  })
export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  })
  const onSubmit = (data, e) => {
    e.target.reset()
    console.log(data)
  }
  console.log(errors)
  return (
    <>
      <div className='flex flex-col min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8 bg-formBg rounded-lg p-10'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-textWhite'>
              Registrarse
            </h2>
          </div>
          <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='-space-y-px rounded-md '>
              <div>
                <label htmlFor='username' className='sr-only'>
                  Nombre de usuario
                </label>
                <input
                  id='username'
                  name='username'
                  type='text'
                  autoComplete='username'
                  className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-50 focus:outline-none focus:ring-slate-50 sm:text-sm'
                  placeholder='Ingrese su nombre de Usuario'
                  {...register('username')}
                />
                {errors.username?.message && (
                  <p className='py-2 text-white text-xs font-semibold'>
                    {errors.username?.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-50 focus:outline-none focus:ring-slate-50 sm:text-sm'
                  placeholder='Ingrese su correo electronico'
                  {...register('email')}
                />
                {errors.email?.message && (
                  <p className='py-2 text-white text-xs font-semibold'>{errors.email?.message}</p>
                )}
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  className='relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Ingrese su contraseña'
                  {...register('password')}
                />
                {errors.password?.message && (
                  <p className='py-2 text-white text-xs font-semibold'>
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Confirm Password
                </label>
                <input
                  id='confirmPassword'
                  name='confirmpassword'
                  type='password'
                  autoComplete='current-password'
                  className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Repita su contraseña'
                  {...register('confirmpassword')}
                />
                {errors.confirmpassword?.message && (
                  <p className='py-2 text-white text-xs font-semibold'>
                    {errors.confirmpassword?.message}
                  </p>
                )}
              </div>
              <div className='items-center justify-center flex pt-5'>
                <label
                  htmlFor='Toggle3'
                  className='flex items-center p-2 rounded-md cursor-pointer'
                >
                  <input
                    id='Toggle3'
                    type='checkbox'
                    className='hidden peer'
                    name='isColaborator'
                    {...register('isColaborator')}
                  />
                  <span className='px-4 py-2 rounded-l-md bg-primary peer-checked:bg-gray-300 text-textWhite'>
                    Paciente
                  </span>
                  <span className='px-4 py-2 rounded-r-md bg-gray-300 peer-checked:bg-primary text-textWhite'>
                    Colaborador
                  </span>
                </label>
              </div>
            </div>
            <div>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 uppercase tracking-widest'
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className='mt-10 items-center'>
          <Link to='/login' className='text-textWhite text-sm font-semibold'>
            Ya tengo una cuenta
          </Link>
        </div>
      </div>
    </>
  )
}
