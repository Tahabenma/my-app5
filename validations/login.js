export function validateform(formData) {
const courriel = formData.get('courriel');
const nom = formData.get('nom');  
const question = formData.get('question');
       

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
            
        }

        return [erreur, newFormState];
    }
