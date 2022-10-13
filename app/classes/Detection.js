class Detection {
	isPhone() {
		if (!this.isPhoneChecked) {
			this.isPhoneChecked = true

			this.isPhoneChecked = document.documentElement.classList.contains('phone')
		}
	}

	isTabet() {
		if (!this.isTabletChecked) {
			this.isTabletChecked = true

			this.isTabletChecked = document.documentElement.classList.contains('tablet')
		}
	}

	isDesktop() {
		if (!this.isDesktopChecked) {
			this.isDesktopChecked = true

			this.isDesktopChecked = document.documentElement.classList.contains('desktop')
		}
	}
}

const DetectionManager = new Detection()

export default DetectionManager
