import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

import { UserService } from './user.service';
import { PopupService } from './popup.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        MatSnackBarModule,
      ],
      providers: [PopupService]
      
    }).compileComponents();
    httpTestingController = TestBed.get(HttpTestingController)
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a null value in loggedInUser after logOutUser()',() => {
    service.logUserOut()
    expect(service.loggedInUser.value).toBeNull()
  })

  it('should have a false value in userIsLoggedIn after logOutUser()', () => {
    service.logUserOut()
    expect(service.userIsLoggedIn.value).not.toBe(true)
  })

  it('should have a null loggedInUser after invalid username/password logUserIn()', () => {
    service.logUserIn('aaa', 'bbb')
    expect(service.loggedInUser.value).toBeNull()
  })

  it('should have a false userIsLoggedIn after invalid username/password logUserIn()', () => {
    service.logUserIn('zzz', 'yyy')
    expect(service.userIsLoggedIn.value).not.toBe(true)
  })
});
