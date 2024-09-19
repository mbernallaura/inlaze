import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({}); 
    
    useEffect(() => {
        createValidator();
    }, [formState])

    const isFormValid = useMemo( () =>{
        //!Se evalua si todos los campos son validos para poder enviarlo
        for (const formValue of Object.keys( formValidation )) {
            if( formValidation[formValue] !== null ) return false;
        }
        return true;
    }, [ formValidation ])
    
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidator = () =>{
        const formCheckedValues = {};
        for (const formField of Object.keys( formValidations )) { 
            //!En la siguiente linea de codigo desfragmentamos el objeto para objetener la funcion que es con la que se valida los campos 
            const [ fn, errorMessage ] = formValidations[ formField ];

            //!formState[ formField ] para saber el valor de la funcion, aplicas lo del objeto de javascript
            //en este caso en const formState ={email: 'ejemplo@gmail.com', password: 'Mustang'} trae estos valores
            //formState[email] => con esta nomeclatura sabemos que valor tiene el objeto formState en el atributo email, en este caso va a traer lo que ha colocado el usuario en el campo email
            //ya que tenemos ese valor ahora con la funcion desestructurada del objeto podemos introducirle ese valor para que evalue
            //Como la funcion es: (value) => value.includes('@'), evalua si el string tiene @, si la funcion es verdad, entonces null sino, manda un mensaje de error
            formCheckedValues[`${ formField }Valid`] = fn(formState[ formField ]) ? null : errorMessage; 
        }

        setFormValidation( formCheckedValues );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        
        ...formValidation,
        isFormValid
    }
}
