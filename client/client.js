async function fetching(){
    const response = await fetch('	https://api.publicapis.org/entries');
    const data = await response.json();
    console.log(data);
}
fetching();