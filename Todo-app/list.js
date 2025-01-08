


const supabaseUrl = 'https://ssjddshsfgeoptpkouoi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzamRkc2hzZmdlb3B0cGtvdW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNjExNzQsImV4cCI6MjA1MTczNzE3NH0.4kSDhZrt9MVi2A3TJfU6OfsCDvCziYgf-TbSzmpkTOk'
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)
// console.log(supabaseUrl,supabaseKey);



const btn = document.getElementById('add-btn')
const input = document.getElementById('input-box')

async function addtodo(){
    if(input.value == ""){
        alert("Please Enter Task")
    }
    const task = input.value
       console.log(input.value);
    const { error } = await supabaseClient
  .from('todo')
  .insert({ task })

}

// addtodo()



