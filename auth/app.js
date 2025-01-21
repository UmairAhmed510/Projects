const supabaseUrl = 'https://uaqgubfueougjzuwwtnd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhcWd1YmZ1ZW91Z2p6dXd3dG5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0ODMxNDQsImV4cCI6MjA1MzA1OTE0NH0.ARnMZdlqTn6JuRASuSbZUY-F4wHoFDfbW0_XaqSY0tA"
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)
console.log(supabaseClient)
const emailEle = document.getElementById('email')
const passEle = document.getElementById('Password')

async function signup(){
    const email = emailEle.value
    const password = passEle.value
    console.log(email, password)
    const { data, error } = await supabaseClient.auth.signUp({email, password
      })

      console.log(data)

if(!error){
    alert("login Successfully");
    

}
}
