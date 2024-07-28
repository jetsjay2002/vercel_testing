class RescheduleDialog {
    constructor() {
      this.container = this.createDialogContainer();
      this.box = this.createDialogBox();
      this.closeButton = this.createCloseButton();
    }
  
    createDialogContainer() {
      const container = document.createElement('div');
      container.classList.add('dialog-container');
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100%';
      container.style.height = '100%';
      container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      container.style.display = 'flex';
      container.style.justifyContent = 'center';
      container.style.alignItems = 'center';
      container.style.zIndex = '9999';
      return container;
    }
  
    createDialogBox() {
      const box = document.createElement('div');
      box.classList.add('dialog-box');
      box.style.backgroundColor = '#fff';
      box.style.padding = '20px';
      box.style.borderRadius = '4px';
      box.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
      return box;
    }
  
    createCloseButton() {
      const button = document.createElement('button');
      button.textContent = 'Close';
      button.addEventListener('click', () => {
        this.hide();
      });
      return button;
    }
  
    show() {
      this.box.appendChild(this.closeButton);
      this.container.appendChild(this.box);
      document.body.appendChild(this.container);
    }
  
    hide() {
      document.body.removeChild(this.container);
    }
  }
  
  export default RescheduleDialog;