<script>
  import { db } from "../firebase.js"; //Importamos el firestore
  import { onMount } from "svelte";//Lifecycle 
  export let params;

  let name, desc;

  async function firestoreLoad() {
    let products = await db.collection("products");
    products
      .doc(params.id)
      .get()
      .then(function(doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          name = doc.data()["name"];
          desc = doc.data()["desc"];
        } else {
          // doc.data() es undefined
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }

  onMount(async () => {         // Cuando se renderiza el componente en el DOM
    await firestoreLoad();
    window.scrollTo(0,0);
  });

</script>

<h2>Producto: {name}</h2>
<p>{desc}</p>
