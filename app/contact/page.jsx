"use client"

import { useActionState } from 'react';

import styles from './page.module.css';

export default function FormLogin() {
    /**
     * @param {FormData} formData 
     */
    const handlesubmit = (__, formData) => {
        const courriel = formData.get('courriel');
        console.log ("couriel entree: ", courriel )
         let newFormState = { courriel: { erreur: null, valeur: '' },
        }

        let erreur = false;
        if(!courriel) {
            erreur = true;
            newFormState.courriel.erreur = 'Veuillez entrer une adresse courriel.';
        }
        else if(!courriel.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) {
            erreur = true;
            newFormState.courriel.erreur = 'Veuillez entrer une adresse courriel valide.'
        }

        if(erreur) {
            newFormState.courriel.valeur = courriel;
           
        }

        return newFormState;
    }

    const [formState, formAction] = useActionState(handlesubmit, {
        courriel: { erreur: null, valeur: '' },
       
    });

    return <form action={formAction} className={styles.form} noValidate>
        <label>
            Courriel:
            <input type="email" name="courriel" defaultValue={formState.courriel.valeur} />
            <div className={styles.erreur}>
                {formState.courriel.erreur}
            </div>
        </label>
        
        <label className={styles.form2}>
        Name!:
        <textarea className={styles.form2} name="contentinfo" defaultValue={formState.content} />
       </label>

       <label className={styles.content}>
        Let us know If you have any questions:
        <textarea className={styles.text} name="contentinfo" defaultValue={formState.content} />
       </label>

        <button type="submit">submit</button>
    </form>
}