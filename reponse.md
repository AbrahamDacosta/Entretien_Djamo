1)
Q) Citez quatre verbes HTTP et leur utilisation ?
R)Les quatres verbes HTTP sont:
POST:La méthode POST est utilisée pour envoyer une entité vers la ressource indiquée. Cela entraîne généralement un changement d'état ou des effets de bord sur le serveur.

PUT:La méthode PUT remplace toutes les représentations actuelles de la ressource visée par le contenu de la requête.

Delete:La méthode DELETE supprime la ressource indiquée.

Connect:La méthode CONNECT établit un tunnel vers le serveur identifié par la ressource cible

2) Supposons que vous deviez soumettre une requête http à un service Web API pour créer une ressource Post.
    2.a Écrivez la charge utile JSON requise pour créer la ressource Post sur ce serveur
    R) Voir code
    2.b Quel verbe HTTP utiliseriez-vous ?
    R) Le verbe que j'utiliserai est le POST et le GET
    2.c Pouvez-vous écrire la commande curl complète requise pour créer la ressource Post ?
    R)
    curl --request POST \
  --url  http://api-server/posts \
  --header 'authorization: Bearer 12dc9fe4-7df4-4786-8d7a-a46d307687f4'\
  --header 'content-type: application/json' \
  --header 'Expect:' \
  --data '{ "body": "Un nouveau message à été envoyé. verifiez le","to" : "+30697ΧΧΧΧΧΧΧ","from": "amdTelecom"}'

3) Considérez un composant critique de votre plate-forme, un composant de messagerie. L'objectif de ce composant est d'envoyer des SMS critiques à vos utilisateurs finaux. Vous avez 3 fournisseurs de SMS, MANGO, LEMON et APPLE. Comment implémenteriez-vous le composant de messagerie de votre plateforme de manière à être sûr qu'un utilisateur reçoive toujours le SMS ? Quelle logique utiliseriez-vous ? Décrivez brièvement la logique que vous mettriez en œuvrre?
R)
R1)D'abord j'implementerais le composant de ma messagerie via des campagne de sms sur Routee
R2)J 'utiliserais la logique de rappel le WebHooks
R3)
Premièrement: Définir l'ID d'expéditeur par défaut
Un SenderID décrit l'expéditeur du message. Il s'agit d'une combinaison de lettres (az,AZ), de chiffres (0-9) et d'espaces d'une longueur maximale de 11 caractères ou d'un nombre à 16 chiffres
Deuxièmement:Rappeler
L'URL de rappel (ou webhook) est utilisée pour mettre à jour les applications clientes pour les changements d'état de SMS ou de campagne (SMS en masse). Vous pouvez fournir des URL de rappel pour les mises à jour de l'état de remise des messages.
Troisèmement:Heures calmes
En utilisant cette fonctionnalité, vous vous assurez que vos messages seront livrés avec respect pendant les heures calmes, parfois imposées par les régulateurs des pays locaux, et le bon sens.
Quatrèmemet:Appliquer le transcodage
En utilisant cette fonctionnalité, vous vous assurez que vos messages seront toujours transcodés (si possible) lorsque le corps du message est en unicode et dépasse une partie. Si les parties du message sont inférieures à deux, le message sera envoyé en unicode. 
Enfin:
Authentification à deux facteurs pour vos applications ou portails
L'authentification à deux facteurs est également connue sous le nom de vérification en deux étapes . Il s'agit d'une méthode de confirmation de l'identité revendiquée d'un utilisateur en utilisant une combinaison de deux composants différents. Dans notre cas un code et un numéro de téléphone vérifié.
Vous pouvez utiliser ce service pour toute authentification dans n'importe quel portail ou application mobile afin de vous assurer une sécurité maximale, tout comme de nombreux autres services que vous utilisez.

4) Veuillez décrire une application que vous avez déjà implémentée. Qu'a fait l'application ? Quelle technologie avez-vous utilisé ? Quelle structure as-tu utilisé pour ton code ? Pouvez-vous partager un lien github pour le code ?
R)
L'appliction que j'ai implementé est une plateforme d'ecommerce .Cette application permet à un utilisateur de créer un compte utilisateur via son mail,ensuite l'utilisateur permet de choisir un produit et l'inserer,supprimer dans son panier,ensuite procedez à l'achat via un système de payement en ligne Stripe.
La technologie utilisée est en frontend react js et en backend node js cloudMongodb
Pour le backend node js comme technologie j'ai utilisée react redux,Express,mongoose,nodemon,npm