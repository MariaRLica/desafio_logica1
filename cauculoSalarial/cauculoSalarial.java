import java.util.Scanner;

public class cauculoSalarial {

    public static void main(String[] args) {
        java.util.Scanner leitordeEntradas = new Scanner(System.in);
        float valorSalario = leitordeEntradas.nextFloat();
        float valorBeneficios = leitordeEntradas.nextFloat();

        float valorImposto = 0;
        if (valorSalario>= 0 && valorSalario <= 1100){
            valorImposto = 0.05f*valorSalario;
        } else if (valorSalario>=1100.01 && valorSalario<=2500){
            valorImposto = 0.10f *valorSalario;

        } else{
            valorImposto=0.15f*valorSalario;        }

        }

        float saida = valorSalario - valorImposto + valorBeneficios;

        public float getSaida() {
            return saida;
        }

        public void setSaida(float saida) {
            this.saida = saida;
        }
        System.out.println(String.format("%.2f", saida)))
}    


