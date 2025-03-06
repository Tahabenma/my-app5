"use client"

import { useActionState } from 'react';
import styles from './Contact.module.css';

export default function FormLogin() {
    /**
     * @param {FormData} formData 
     */
    const handlesubmit = (__, formData) => {
        const courriel = formData.get('courriel');
        const nom = formData.get('nom');  
        const question = formData.get('question');
        console.log("courriel entrée: ", courriel);
        console.log("nom entrée: ", nom);

        let newFormState = { 
            courriel: { erreur: null, valeur: '' },
            nom: { erreur: null, valeur: '' },
            question: { erreur: null,  valeur: ''}
        };

        let erreur = false;

       
        if (!courriel) {
            erreur = true;
            newFormState.courriel.erreur = 'Veuillez entrer une adresse courriel.';
        } else if (!courriel.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) {
            erreur = true;
            newFormState.courriel.erreur = 'Veuillez entrer une adresse courriel valide.';
        }

       
        if (!nom) {
            erreur = true;
            newFormState.nom.erreur = 'Veuillez entrer un nom.';
        } else if (!nom.match(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/)) {
            erreur = true;
            newFormState.nom.erreur = 'Veuillez entrer un nom valide (lettres et espaces seulement).';
        }
        
        if (!question) {
            erreur = true;
            newFormState.question.erreur = 'Veuillez entrer votre question.';
        }
       
        if (erreur) {
            newFormState.courriel.valeur = courriel;
            newFormState.nom.valeur = nom;
            newFormState.question.valeur = question;
            return newFormState;
        }

        return newFormState;
    }
 
    async function handleSubmit(event) {
        const formData = new FormData(event.target); 
        try {
            const response = await fetch('/api/contacter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            
            if (response.ok) {
                const result = await response.json();
                console.log('succes:', result);
            } else {
                console.error('erreur:', await response.text());
            }
        } catch (error) {
            console.error('erreur fetch:', error);
        }
    }

    const [formState, formAction] = useActionState(handlesubmit, {
        courriel: { erreur: null, valeur: '' },
        nom: { erreur: null, valeur: '' },
        question: {erreur: null, valeur:''},
    });

    return (
      //  <form action={formAction} className={styles.form} noValidate>
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <label>
                Courriel:
                <input type="email" name="courriel" defaultValue={formState.courriel.valeur} />
                <div className={styles.erreur}>
                    {formState.courriel.erreur}
                </div>
            </label>
            
            <label className={styles.form2}>
                Name!:
                <textarea className={styles.form2} name="nom" defaultValue={formState.nom.valeur} />
                <div className={styles.erreur}>
                    {formState.nom.erreur}
                </div>
            </label>

            <label className={styles.content}>
                Let us know If you have any questions:
                <textarea className={styles.text} name="question" defaultValue={formState.question.valeur} />
                <div className={styles.erreur}>
                    {formState.question.erreur}
                </div>
            </label>

            <button type="submit">Submit</button>
        </form>
    );
}
