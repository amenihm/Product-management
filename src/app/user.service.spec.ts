import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of users', () => {
    const users = service.getAllUsers();
    expect(users.length).toBeGreaterThan(0);
    expect(users).toEqual(jasmine.any(Array)); // Vérifie que la liste est bien un tableau
  });
});
