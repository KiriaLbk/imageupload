import { Component, OnInit, ɵConsole } from '@angular/core';
import { AngularFirestore, DocumentData } from 'angularfire2/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  date: string;
  conditionimage: boolean;
  arr: any[] = [];
  condition: boolean;
  newimage = {
    url: '',
    name: ''};

  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.makegalleryimage();
    this.conditionimage = false;
  }
  makegalleryimage(): void{
    this.firestore.collection('address').get().toPromise().then(querySnapshot => {
      querySnapshot.docs.forEach(element => {
        const mas = [];
        mas.push(element.data().url);
        mas.push(element.data().name);
        this.arr.push(mas);
      });
      if (this.arr.length === 0){
        this.condition = false;
      }
      else{
        this.condition = true;
      }
    });
  }
  makegallery(address): void{
    const file: File = address.target.files[0];
    const metadata = {
      contentType : file.type
    };
    const id = address.target.value.split('').slice(address.target.value.lastIndexOf('\\') + 1, -4).join('');
    const storageRef: firebase.storage.Reference = firebase.storage().ref(id);
    storageRef.put(file, metadata);
    storageRef.getDownloadURL().then((date) => {
      const addr = {
        name: id,
        url: date
      };
      this.newimage = {
        name: id,
        url: date
      };
      this.firestore.collection('address').add(addr);
    });
    this.conditionimage = true;
  }
}
