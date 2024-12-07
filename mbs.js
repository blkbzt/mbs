class MobileButton {
    static has_mouse = null;

    constructor({element_id}) {
        this.button = document.getElementById(element_id);
        if (!this.button) {console.error(`"${element_id}" not found`); return}

        if (MobileButton.has_mouse === null) {MobileButton.has_mouse = this.check_for_mouse()}
        this.has_mouse = MobileButton.has_mouse;
        this.add_event_listeners();
    }

    check_for_mouse() {
        if (matchMedia('(pointer: fine)').matches && 'PointerEvent' in window) {return true}
        return false;
    }

    add_event_listeners() {
        if (this.has_mouse) {
            this.button.addEventListener('mouseenter', this.add_hover_effect.bind(this));
            this.button.addEventListener('mouseleave', this.remove_hover_effect.bind(this));
        }

        this.button.addEventListener('mousedown', this.add_active_effect.bind(this));
        document.addEventListener('mouseup', this.remove_active_effect.bind(this));

        this.button.addEventListener('touchstart', this.add_active_effect.bind(this), { passive: true });
        this.button.addEventListener('touchend', this.remove_active_effect.bind(this), { passive: true });
        this.button.addEventListener('touchcancel', this.remove_active_effect.bind(this), { passive: true });
        this.button.addEventListener('touchend', this.remove_hover_effect.bind(this), { passive: true });
        this.button.addEventListener('touchcancel', this.remove_hover_effect.bind(this), { passive: true });
    }

    add_hover_effect() {this.button.classList.add("mbs-hover");}
    remove_hover_effect() {this.button.classList.remove("mbs-hover")}
    add_active_effect() {this.button.classList.add("mbs-active")}
    remove_active_effect() {this.button.classList.remove("mbs-active");}
}