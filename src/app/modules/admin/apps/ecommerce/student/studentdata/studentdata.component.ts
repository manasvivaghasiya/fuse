import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, DebugEventListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
// import { MatSort } from '@angular/material/sort';
import { InventoryProduct } from '../../inventory/inventory.types';
import { StudentService } from '../student.service';
import { studentProduct } from '../student.type';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styles: [
    /* language=SCSS */
    `
        .inventory-grid {
            grid-template-columns: 48px auto 40px;

            @screen sm {
                grid-template-columns: 48px auto 112px 72px;
            }

            @screen md {
                grid-template-columns: 48px 112px auto 112px 72px;
            }

            @screen lg {
                grid-template-columns: 48px 112px auto 112px 96px 96px 72px;
            }
        }
    `
  ],
  animations: fuseAnimations
})
export class StudentdataComponent implements OnInit {
  product: boolean = true;
  products$: Observable<studentProduct[]>;
  // products:any;
  selectedProductForm: FormGroup;
  // selectedProduct: InventoryProduct | null = null;
  products: any;
  selectedProduct: any;
  // _changeDetectorRef: any;
  editInfo: any;
  step = 0;



  constructor(private httpclient: HttpClient,
    private _formBuilder: FormBuilder,
    private _studentService: StudentService,
    private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.selectedProductForm = this._formBuilder.group({
      category: [''],
      productName: [''],
      description: [''],
      price: [''],
      clothSize: [''],
      inStock: [''],
      _id: ['']
    }) as any;

    this.getProduct();
  }

  submit() {

  }
  addProduct() {

  }

  setStep(index: number) {
    this.step = index;
    this.selectedProductForm.reset()
  }
  cancle() {
    this.step++;
    this.selectedProductForm.reset()
  }
  nextStep() {
    debugger
    this.step++;
    this.httpclient.post(`${environment.apiProduct}/product/add`, this.selectedProductForm.value)
      .subscribe((res: any) => {
        if (res.isSuccess) {
          alert('Data added successfully')
          this.getProduct()
          this.selectedProductForm.reset()

        } else {
          alert(res.message)
        }
      });
    this.closeDetails();


  }

  prevStep() {
    this.step--;
  }
  //  -----get-----
  getProduct() {
    this.httpclient.get(`${environment.apiProduct}/product/get`)
      .subscribe((res: any) => {
        this.products = res.data
        console.log(res.data)
      });
  }

  //   getByProductId(id: string | undefined) {

  //     this.httpclient.get(`${environment.apiProduct}/product/get-product-by-id?id=${id}`).subscribe((res: any) => {
  //       this.products.category = res.category;
  //       this.products.productName = res.productName;
  //       this.products.description = res.description;
  //       this.products.price = res.price;
  //       this.products.clothSize = res.clothSize;
  //       this.products.inStock = res.inStock;
  //       this.products._id = res._id;
  //       console.log(res);
  //     })
  // }


  // ------form-open---
  // createProduct(product:any){

  // debugger
  //   // this.httpclient.post(`${environment.apiProduct}/product/add`,this.selectedProduct)
  //   // .subscribe((product)=>{
  //     if(this.selectedProduct && this.selectedProduct._id === product) 
  //     {
  //       this.closeDetails();
  //       return;  
  //     }
  //   //   this.selectedProduct = product;
  //   // this.selectedProductForm.patchValue(product);

  //   // // Mark for check
  //   // this._changeDetectorRef.markForCheck();
  //   // });
  //   // {
  //   //   this.closeDetails();
  //   //   return;
  //   // } 
  // }

  createProduct(): void {
    debugger

    this.product = true;
    // if(this.selectedProduct && this.selectedProduct._id) 

    // {
    //   this.closeDetails();
    //   return;  
    // } 

    //   // Create the product
    //   this._studentService.createProduct().subscribe((newProduct) => {

    //       // Go to new product
    //       this.selectedProduct = newProduct;

    //       // Fill the form
    //       this.selectedProductForm.patchValue(newProduct);

    //       // Mark for check
    //       this._changeDetectorRef.detectChanges();
    //   });
  }


  // -----add-update-data----
  updateSelectedProduct(_id: string) {
    debugger
    if (this.selectedProductForm.value) {
      this.updateProduct(_id);
    }
    else {
      this.httpclient.post(`${environment.apiProduct}/product/add`, this.selectedProductForm.value)
        .subscribe((res: any) => {
          if (res.isSuccess) {
            alert('Data added successfully')
            this.getProduct()
            this.selectedProductForm.reset()

          } else {
            alert(res.message)
          }
        });
    }
    this.closeDetails();
  }

  // ---close-toggle---
  closeDetails(): void {
    this.selectedProduct = '';
  }

  // ----open-toggle----
  toggleDetails(_id: string): void {
    debugger
    // if(this.selectedProduct && this.selectedProductForm['id'] === id) 
    if (this.selectedProduct && this.selectedProduct._id === _id) {
      this.closeDetails();
      return;
    }
    this._changeDetectorRef.detectChanges();

    this.httpclient.get(`${environment.apiProduct}/product/get-product-by-id?id=${_id}`, this.selectedProduct).subscribe((res: any) => {
      if (res.isSuccess) {
        this.selectedProduct = res.data;
        this.selectedProductForm.patchValue(res.data);

        // Mark for check
        this._changeDetectorRef.detectChanges();
      }
      else {
        console.log('error')
      }
    });
  }

  // ----update----
  updateProduct(_id: string) {
    debugger
    const data = {
      "category": this.selectedProductForm.value.category,
      "productName": this.selectedProductForm.value.productName,
      "description": this.selectedProductForm.value.description,
      "price": this.selectedProductForm.value.price,
      "clothSize": this.selectedProductForm.value.clothSize,
      "inStock": this.selectedProductForm.value.inStock,
      "id": _id,
    }
    this.httpclient.post(`${environment.apiProduct}/product/update`, data).subscribe((res: any) => {
      if (res.isSuccess) {
        // this.editInfo = null
        debugger
        alert('Data updated successfully')

        this.selectedProductForm.reset()
        this.getProduct()
      } else {
        alert(res.message)
      }
    });
    this.closeDetails();
  }


  // ----delete-data------
  deleteSelectedProduct(id: string) {
    debugger
    this.httpclient.delete(`${environment.apiProduct}/product/delete?id=${id}`)
      .subscribe((res: any) => {
        if (res.isSuccess) {
          alert('data successfully delete')
          this.getProduct();

          // this.getByProductId(id);
          console.log(res);
        } else {
          alert(res.message)
        }
      });
    this.closeDetails();

  }
}
