export interface PaginatedResponse<T> {
    data: T[];
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface Client {
    id: number;
    // if he is normal user
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    cg_name?: string;       // company or governmental entity name
    administrator_name?: string;
    cr_number?: string;
    license_number?: string;
    email: string;
    country_code: string;
    phone_number: string;
    img?: string;
    gender: 'Male' | 'Female';
    type: 'Normal' | 'Company' | 'Governmental entity';
    status: number;          // 1 = Active, 3 = Banned
}

export interface Company {
    id: number;
    company_name: string;
    cr_number: string;
    city: string;
    fleet_size: number;
    vehicles_type: 'BUS' | 'Car' | 'Bus and Car';
    cr_file: string | null;  // URL or path string to commercial registration file
    tl_file: string | null;  // URL or path string to transport license file
    tc_file: string | null;  // URL or path string to tax certificate file
    status: number;          // e.g., 1 = Pending, 2 = Active, 3 = Declined
}

export interface Driver {
    id: number;
    company?: Company;
    first_name: string;
    middle_name?: string;
    last_name: string;
    email: string;
    country_code: string;
    phone_number: string;
    img?: string;
    id_number?: string;
    residency_number?: string;
    id_file?: string;
    residency_file?: string;
    tl_file?: string;
    gender: 'Male' | 'Female';
    status: number;
}

export interface Vehicle {
    id: number;
    vehicle_type?: VehicleType;
    company?: Company;
    driver?: Driver;
    plate_number: string;
    model_year: number;
    rf_file?: string;
    insurance_file?: string;
    status: number;
}

export interface VehicleType {
    id: number;
    type_name: string;
    min_seats: number;
    max_seats: number;
}


export interface Contract {
    id: number;
    area?: Area;
    company?: Company;
    client: Client;
    passenger_class: PassengerClass;
    vehicles?: Vehicle[]; // Physical vehicles assigned
    contract_type: 'Normal contract' | 'Special contract';
    departure_datetime: string;
    departure_lat: number;
    departure_lng: number;
    arrival_lat?: number;
    arrival_lng?: number;
    distance_km?: number;
    direction: string;
    duration: number;
    duration_unit: string;
    week_days?: string[] | string | null;
    return_time?: string;
    seats: number;
    notes?: string;
    description?: string;
    attachments?: string[] | string | null;
    estimated_price?: number;
    final_price?: number;
    status: string; // 1 pending_estimation; 2 estimation_ready; 3 broadcasted; 4 assigned; 5 completed; 6 Cancelled;
}



export interface SpecialContract {
    id: number;
    type: 'VIP' | 'Procession' | 'Trip' | 'Event' | 'School Trip' | 'Other';
    description: string;
    attachments: string[] | string | null;
}

export interface SharedTrip {
    id: number;
    seat_price: number;
    description: string;
    discount_percentage: number;
}

export interface PassengerClass {
    id: number;
    name: number;
}

export interface Complaint {
    id: number;
    reservation: Reservation;
    location_archive : LocationArchive;
    client: Client;
    description: string;
    status: number; // 1 = Open, 2 = Resolved
}

export interface Reservation {
    id: number;
    client: Client;
    contract : Contract;
    description: string;
    seats_reserved: number;
    estimated_price: number;
    currency: string;
    platform_fee: number;
    net_company_revenue: number;
    status: number; // 1 = Open, 2 = Resolved
}

export interface LocationArchive {
    id: number;
    reservation: Reservation;
    start_lat : number;
    start_lng : number;
    end_lat : number;
    end_lng : number;
    expected_polyline: string;
    actual_polyline: string;
    status: number; // 1 = Open, 2 = Resolved
}

export interface Area {
    id: number;
    name: string;
    boundary: any;
}

export interface Coordinate {
    lat: number;
    lng: number;
}

export interface UseGoogleMapDrawingProps {
    isOpen: boolean;
    apiKey: string;
    onBoundaryChange: (coords: Coordinate[]) => void;
    defaultCenter?: Coordinate;
    defaultZoom?: number;
}

export interface AreaPricingRule {
    price_per_kilometer: string;
    price_per_minute: string;
    booking_tax: string;
    price_for_stop_point: string;
    client_commission_value: string;
    client_commission_type: 'percentage' | 'fixed';
    vat_percentage: string;
    deduction_from_company_revenue: string;
    deduction_type: 'percentage' | 'fixed';
}

export interface ContractDiscountTier {
    id?: number;
    min_days: number;
    max_days: number | null;
    discount_percentage: string;
}

export interface VehicleCommission {
    id?: number;
    vehicle_type_id: number;
    type_name: string;
    rate: string;
}
