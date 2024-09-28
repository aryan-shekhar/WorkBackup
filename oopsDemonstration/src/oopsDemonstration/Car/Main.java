package oopsDemonstration.Car;

public class Main {

	public static void main(String[] args) {
		 Car car = new Car("Tesla Model 3", "Red", 2022);
	        car.displayInfo();

	        // Inheritance and Polymorphism example
	        ElectricCar electricCar = new ElectricCar("Tesla Model S", "White", 2021, 12);
	        electricCar.displayInfo();

	        // Abstraction example
	        Vehicle motorbike = new MotorBike();
	        motorbike.start();

	        // Polymorphism via Interface example
	        Horn truck = new Truck();
	        truck.honk();
	}
}
