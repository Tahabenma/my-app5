"use client"

import { useActionState } from 'react';
import styles from './Contact.module.css';
import { validateform } from '@/app/validations/login';
import { contactServeur } from '@/app/actions/send';


export default function FormLogin() {
    /**
     *
     * @param {FormData} formData 
     */
    const handleSubmit = async (previousFormState, formData) => {
      let [erreur, newFormState] = validateform(formData);
    

      if(!erreur) {
        [erreur, newFormState] = await contactServeur(formData);
    }
  
        if (erreur) {
            newFormState.courriel.valeur = formData.get('courriel');
            newFormState.nom.valeur = formData.get('nom');
            newFormState.question.valeur = formData.get('question');
           
        }
    
       
        return newFormState;
    };

    const [formState, formAction] = useActionState(handleSubmit, {
        courriel: { erreur: null, valeur: '' },
        motdepasse: { erreur: null, valeur: '' },
        nom: { erreur: null, valeur: '' },
        question: { erreur: null, valeur: '' }
    });

    return (
        <form action={formAction} className={styles.form} noValidate>
            <label>
                Courriel:
                <input type="email" name="courriel" defaultValue={formState.courriel.valeur} />
                <div className={styles.erreur}>{formState.courriel.erreur}</div>
            </label>

            <label>
                Nom:
                <input type="text" name="nom" defaultValue={formState.nom.valeur} />
                <div className={styles.erreur}>{formState.nom.erreur}</div>
            </label>

            <label>
                Votre question:
                <textarea name="question" className={styles.text} defaultValue={formState.question.valeur} />
                <div className={styles.erreur}>{formState.question.erreur}</div>
            </label>

            <button type="submit">Envoyer</button>
        </form>
    );
}
//nouveau fhciher java script pour la validation 