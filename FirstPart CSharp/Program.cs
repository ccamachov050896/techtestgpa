using System;


namespace Proyectos
{
    class Principal
    {
        private string word1, word2, newword;
       

        //Constructor
         public Principal(string word1, string word2){
            this.word1 = word1;
            this.word2 = word2;
        }

        public string Word1{
            get { return this.word1; }
            set { this.word1 = value; }
        }

        public string Word2{
            get { return this.word2; }
            set { this.word2 = value; }
        }

        public string NewWord{
            get { return this.newword; }
            set { this.newword = value; }
        }

       
        public string MergeWord()
        {
            
            int Lngt1 = Word1.Length, Lngt2 = Word2.Length; //Get the length of both words
            if (Lngt1 == Lngt2) //When both words have the same length
            {
                for (int x = 0; x< Lngt1; x++)
                {
                    NewWord = NewWord + Word1.Substring(x,1) + Word2.Substring(x,1);
                }
               
            }else if (Lngt1 > Lngt2) //When the first word is bigger than the second one
            {

                for (int x = 0; x < Lngt2; x++)
                {
                    NewWord = NewWord + Word1.Substring(x, 1) + Word2.Substring(x, 1);
                }
                for (int x = Lngt2; x < Lngt1; x++)
                {
                    NewWord = NewWord + Word1.Substring(x, 1);
                }
               
            }

            else //When the second word is bigger than the first one
            {

                for (int x = 0; x < Lngt1; x++)
                {
                    NewWord = NewWord + Word1.Substring(x, 1) + Word2.Substring(x, 1);
                }
                for (int x = Lngt1; x < Lngt2; x++)
                {
                    NewWord = NewWord + Word2.Substring(x, 1);
                }
                
            }
            return NewWord;

        }

        public void Princ()
        {
            
        }
        
    }
    class Program
    {
        static void Main(string[] args)
        {
            string W1, W2 = "";
            Console.WriteLine("Enter the first word");
            W1 = Console.ReadLine();
            Console.WriteLine(W1);
            Console.WriteLine("Enter the second word");
            W2 = Console.ReadLine(); 
            Principal P = new Principal(W1, W2);
            Console.WriteLine("The new word is " + P.MergeWord());
           
        }

      
    }
}
