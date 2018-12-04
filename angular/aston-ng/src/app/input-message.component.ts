import { Component, Input } from "@angular/core";

// git rm -rf --cached angular/aston-ng

@Component({
    selector: 'app-input-message',
    templateUrl: './input-message.component.html',
    styleUrls: ['./input-message.component.css']
})
export class InputMessageComponent {
    @Input('size') maxLen = 140;
    @Input() btnName = 'Ajouter'
    text = '';
}
