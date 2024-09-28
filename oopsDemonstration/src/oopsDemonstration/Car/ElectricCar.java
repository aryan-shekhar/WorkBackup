package oopsDemonstration.Car;

public class ElectricCar extends Car{
	private int batteryLife;

	public ElectricCar(String model, String color, int year,int batteryLife) {
		super(model, color, year);
		this.batteryLife=batteryLife;
	}

	public int getBatteryLife() {
		return batteryLife;
	}

	public void setBatteryLife(int batteryLife) {
		this.batteryLife = batteryLife;
	}
	
	public void displayInfo() {
		super.displayInfo();
		System.out.println("Battery Life" + batteryLife + "hours");
	}

}
