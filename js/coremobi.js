mobiscroll.settings = {
    theme: 'ios'
};

const today = new Date();
const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);
const month = [tomorrow, new Date(today.getFullYear(), today.getMonth()+1, today.getDate())];
const lastday = [tomorrow, new Date(today.getFullYear(), today.getMonth()+2, 0)];

const victoria_day = new Date(2019,4,20);
const labour_day = new Date(2019,8,2);
const new_year_day = '1/1';
const christmas_day = '12/25';
const boxing_day = '12/26';
const canada_day = '7/1';
const good_friday_day = new Date(2019,3,19);
const civic_holiday_day = new Date(2019,7,5);
const off_days = [
    victoria_day,
    labour_day,
    new_year_day,
    christmas_day,
    boxing_day,
    canada_day,
    good_friday_day,
    civic_holiday_day,
    'w0'];
const locations = [
    {region: 'Eastern', name: 'Arnprior', position: {lat: 45.434477, lng: -76.345695}, class: ['g2'], sat: false},
    {region: 'Northern', name: 'Atikokan', position: {lat: 48.754433, lng: -91.605365}, class: ['g2', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Eastern', name: 'Bancroft', position: {lat: 45.062417, lng: -77.855987}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Western', name: 'Barrie', position: {lat: 44.330081, lng: -79.689937}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Eastern', name: 'Barry\'s Bay', position: {lat: 45.48522, lng: -77.679312 }, class: ['g2'], sat: false},
    {region: 'Eastern', name: 'Belleville', position: {lat: 44.18494, lng: -77.367345 }, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Blind River', position: {lat: 46.180776, lng: -82.964715}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Central', name: 'Brampton', position: {lat: 43.67804, lng: -79.715848 }, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: true},
    {region: 'Southern', name: 'Brantford', position: {lat: 43.171505, lng: -80.260612}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Eastern', name: 'Brockville', position: {lat: 44.608262, lng: -75.692241}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Central', name: 'Burlington', position: {lat: 43.342623, lng: -79.828299}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Eastern', name: 'Carleton Place', position: {lat: 45.142441, lng: -76.138535}, class: ['g2'], sat: false},
    {region: 'Eastern', name: 'Casselman', position: {lat: 45.308182, lng: -75.08367 }, class: ['g2'], sat: false},
    {region: 'Northern', name: 'Chapleau', position: {lat: 47.849268, lng: -83.413589}, class: ['g2', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Southern', name: 'Chatham', position: {lat: 42.389761, lng: -82.203961}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Western', name: 'Clinton', position: {lat: 43.621405, lng: -81.537025}, class: ['g2', 'g', 'lm2', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Cochrane', position: {lat: 49.036586, lng: -80.955597}, class: ['g2', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Western', name: 'Collingwood', position: {lat: 44.498144, lng: -80.215995}, class: ['g2', 'g'], sat: false},
    {region: 'Eastern', name: 'Cornwall', position: {lat: 45.043142, lng: -74.753135}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Dryden', position: {lat: 49.786914, lng: -92.821308}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Dubreuilville', position: {lat: 48.351178, lng: -84.547759}, class: ['g2', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Ear Falls', position: {lat: 50.642379, lng: -93.241822}, class: ['g2']},
    {region: 'Northern', name: 'Elliott Lake', position: {lat: 46.384455, lng: -82.64305 }, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Espanola', position: {lat: 46.248427, lng: -81.757434}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Fort Frances', position: {lat: 48.610787, lng: -93.398876}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Geraldton', position: {lat: 49.716821, lng: -86.949227}, class: ['g2', 'lm2', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Western', name: 'Guelph', position: {lat: 43.553281, lng: -80.295331}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Haliburton', position: {lat: 45.045847, lng: -78.50724 }, class: ['g2', 'lm2', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Southern', name: 'Hamilton', position: {lat: 43.241029, lng: -79.763776}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: true},
    {region: 'Eastern', name: 'Hawkesbury', position: {lat: 45.597825, lng: -74.61176 }, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Hearst', position: {lat: 49.686271, lng: -83.668909}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Hornepayne', position: {lat: 49.215174, lng: -84.775495}, class: ['g2', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Huntsville', position: {lat: 45.315657, lng: -79.239342}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Ignace', position: {lat: 49.409048, lng: -91.642514}, class: ['g2'], sat: false},
    {region: 'Northern', name: 'Kapuskasing', position: {lat: 49.419423, lng: -82.417987}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Eastern', name: 'Kemptville', position: {lat: 45.013921, lng: -75.642291}, class: ['g2'], sat: false},
    {region: 'Northern', name: 'Kenora', position: {lat: 49.767415, lng: -94.484663}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Eastern', name: 'Kingston', position: {lat: 44.256439, lng: -76.555632}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Kirkland Lake', position: {lat: 48.148035, lng: -80.045172}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Western', name: 'Kitchener', position: {lat: 43.455753, lng: -80.430369}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: true},
    {region: 'Southern', name: 'Leamington', position: {lat: 42.054808, lng: -82.59189 }, class: ['g2'], sat: false},
    {region: 'Eastern', name: 'Lindsay', position: {lat: 44.348692, lng: -78.759966}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Little Current', position: {lat: 45.970375, lng: -81.921864}, class: ['g2', 'lm2', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Southern', name: 'London', position: {lat: 42.918187, lng: -81.205578}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: true},
    {region: 'Eastern', name: 'Madoc', position: {lat: 44.507273, lng: -77.472736}, class: ['g2'], sat: false},
    {region: 'Northern', name: 'Manitouwadge', position: {lat: 49.124493, lng: -85.829443}, class: ['g2', 'g', 'm2', 'lm2', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Marathon', position: {lat: 48.721826, lng: -86.37644 }, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Mattawa', position: {lat: 46.319961, lng: -78.705607}, class: ['g2', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Central', name: 'Mississauga', position: {lat: 43.638886, lng: -79.7094  }, class: ['g2', 'g', 'm2', 'lm2', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: true},
    {region: 'Northern', name: 'Moosonee', position: {lat: 51.274756, lng: -80.646813}, class: ['g2', 'g', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'New Liskeard', position: {lat: 47.524479, lng: -79.672179}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Central', name: 'Newmarket', position: {lat: 44.05654, lng: -79.421025 }, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: true},
    {region: 'Northern', name: 'Nipigon', position: {lat: 49.009778, lng: -88.267544}, class: ['g2', 'lm2', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'North Bay', position: {lat: 46.282262, lng: -79.447054}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Central', name: 'Oakville', position: {lat: 43.411596, lng: -79.731773}, class: ['g2', 'g'], sat: true},
    {region: 'Western', name: 'Orangeville', position: {lat: 43.925022, lng: -80.091169}, class: ['g2', 'g', 'lm2', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: true},
    {region: 'Western', name: 'Orillia', position: {lat: 44.624817, lng: -79.422097}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Central', name: 'Oshawa', position: {lat: 43.894049, lng: -78.868217}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Eastern', name: 'Ottawa Canotek', position: {lat: 45.452924, lng: -75.588528}, class: ['g2', 'g'], sat: false},
    {region: 'Eastern', name: 'Ottawa Walkley', position: {lat: 45.37619, lng: -75.647615 }, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: true},
    {region: 'Western', name: 'Owen Sound', position: {lat: 44.563076, lng: -80.991141}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Parry Sound', position: {lat: 45.37904, lng: -80.043983 }, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Eastern', name: 'Pembroke', position: {lat: 45.816064, lng: -77.12522 }, class: ['g2', 'g', 'm2', 'm', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Eastern', name: 'Peterborough', position: {lat: 44.280362, lng: -78.335578}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Pickle Lake', position: {lat: 51.467903, lng: -90.192514}, class: ['g2', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Eastern', name: 'Port Hope', position: {lat: 43.949164, lng: -78.293459}, class: ['g2', 'g'], sat: false},
    {region: 'Northern', name: 'Rainy River', position: {lat: 48.72197, lng: -94.568598 }, class: ['g2'], sat: false},
    {region: 'Northern', name: 'Red Lake', position: {lat: 51.016169, lng: -93.821563}, class: ['g2', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Eastern', name: 'Renfrew', position: {lat: 45.473746, lng: -76.684359}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Eastern', name: 'Rockland', position: {lat: 45.545176, lng: -75.289985}, class: ['g2'], sat: false},
    {region: 'Southern', name: 'Sarnia', position: {lat: 42.98449, lng: -82.355021 }, class: ['g2', 'g', 'lm2', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Sault Ste Marie', position: {lat: 46.510736, lng: -84.296165}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Schreiber', position: {lat: 48.803786, lng: -87.267082}, class: ['g2', 'lm2', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Southern', name: 'Simcoe', position: {lat: 42.847776, lng: -80.293735}, class: ['g2', 'g', 'lm2', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Sioux Lookout', position: {lat: 50.099251, lng: -91.919285}, class: ['g2'], sat: false},
    {region: 'Eastern', name: 'Smiths Falls', position: {lat: 44.882765, lng: -76.015413}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Southern', name: 'St. Catharines', position: {lat: 43.177828, lng: -79.211326}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Western', name: 'Stratford', position: {lat: 43.354226, lng: -80.99453 }, class: ['g2', 'g', 'lm2', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Sudbury', position: {lat: 46.52274, lng: -80.964652 }, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Sundridge', position: {lat: 45.771727, lng: -79.389169}, class: ['g2', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Thessalon', position: {lat: 46.258052, lng: -83.556665}, class: ['g2', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Thunder Bay', position: {lat: 48.400894, lng: -89.246605}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Southern', name: 'Tillsonburg', position: {lat: 42.866959, lng: -80.723583}, class: ['g2', 'g', 'lm2', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Timmins', position: {lat: 48.490708, lng: -81.19728 }, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Central', name: 'Toronto Downsview', position: {lat: 43.746346, lng: -79.479001}, class: ['g2', 'g', 'm2', 'm', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Central', name: 'Toronto Etobicoke', position: {lat: 43.650035, lng: -79.604191}, class: ['g2', 'g', 'm', 'lm2', 'lm'], sat: true},
    {region: 'Central', name: 'Toronto Metro East', position: {lat: 43.742658, lng: -79.313824}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm'], sat: true},
    {region: 'Central', name: 'Toronto Port Union', position: {lat: 43.797389, lng: -79.151804}, class: ['g2', 'g'], sat: true},
    {region: 'Western', name: 'Walkerton', position: {lat: 44.129891, lng: -81.144039}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Northern', name: 'Wawa', position: {lat: 47.987642, lng: -84.780191}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Eastern', name: 'Westport', position: {lat: 44.677803, lng: -76.399927}, class: ['g2'], sat: false},
    {region: 'Northern', name: 'White River', position: {lat: 48.588093, lng: -85.281352}, class: ['g2', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false},
    {region: 'Eastern', name: 'Winchester', position: {lat: 45.085141, lng: -75.371298}, class: ['g2'], sat: false},
    {region: 'Southern', name: 'Windsor', position: {lat: 42.287818, lng: -83.022201}, class: ['g2', 'g', 'm2', 'm', 'lm2', 'lm', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: true},
    {region: 'Western', name: 'Woodstock', position: {lat: 43.128896, lng: -80.756915}, class: ['g2', 'g', 'lm2', 'a', 'b', 'c', 'd', 'e', 'f', 'z'], sat: false}
];
const range_settings = {
    calendarScroll: 'vertical',
    min: tomorrow,
    showOuterDays: false,
    invalid: off_days,
    months: 2,
    defaultValue: [tomorrow, lastday],
    buttons: ['set', 'clear', 'cancel'],
    colors: [
        { d: victoria_day, background: 'pink' },
        { d: labour_day, background: 'pink' },
        { d: new_year_day, background: 'pink' },
        { d: christmas_day, background: 'pink' },
        { d: boxing_day, background: 'pink' },
        { d: canada_day, background: 'pink' },
        { d: good_friday_day, background: 'pink' },
        { d: civic_holiday_day, background: 'pink' }
    ],
    responsive: {
        xsmall: {
            display: 'bottom',
            controls: ['date'],
            animate: 'slideup'
        },
        custom: {
            breakpoint: 400,
            controls: ['calendar'],
            display: 'bottom',
            animate: 'slideup',
        },
        large: { //992px
            months: 3,
            display: 'center',
            animate: 'pop',
        }
    },
    yearChange: false,
    onInit: function (event, inst) {
        inst.setVal(lastday, true);
    }
};
const locationPicker_settings = {
    display: 'center',
    group: true,
    buttons: ['set', 'cancel', 'clear'],
    groupLabel: '&nbsp;',
    filter: true,
    select: 'multiple',
    responsive: {
        xsmall: {
            display: 'bottom',
            animate: 'slideup',
        },
        large: {
            months: 3,
            display: 'center',
            animate: 'pop'
        }
    },
    onMarkupReady: function (event, inst) {
        if (inst.element.id === 'locationPicker1') {
            let container = $(event.target);
            $("<button id='nearby' class='mbsc-btn mbsc-btn-outline mbsc-control'><b>Pick nearby centres</b><br>less than an hour drive</button>").insertAfter(container.find('.mbsc-sel-filter-cont'));
        }
    },
    onSet: function (event, inst) {
        setLocations(inst, event.valueText);
    },
    onClear: function (event, inst) {
        $(inst.element).closest('.mbsc-select').attr('title', '');
    },
    data: getLocationsForCategory('G')
};

function setLocations(inst, valueText) {
    const values = inst.getVal();
    let tmp = locations.filter(function (e) {
        if (values.indexOf(e.name)>-1 && e.sat === true)
            return e;
    });
    if (tmp.length > 0)
        $(inst.element).closest('.location').next('.time').find('[name^=datePicker]').mobiscroll('getInst').option({invalid: off_days});
    else {
        let tmp = off_days.slice(0);
        tmp.push('w6');
        $(inst.element).closest('.location').next('.time').find('[name^=datePicker]').mobiscroll('getInst').option({invalid: tmp});
    }
    $(inst.element).closest('.mbsc-select').attr('title', valueText);
}

$(function(){
    saveRefId();

    if (window.location.pathname.indexOf('/index') > -1 || window.location.pathname === '/' || window.location.pathname.indexOf('/g') > -1) {
        $('#licenceExpiryDate').mask('0000-00-00');
        $('#licenceNumber').mask('S0000-00000-00000');

        jQuery.validator.addMethod("exactlength", function(value, element, param) {
            return this.optional(element) || value.length == param;
        }, $.validator.format("Licence number invalid"));

        $('#order-form').mobiscroll().form({
            inputStyle: 'outline',
            labelStyle: 'stacked',
            theme: 'ios'
        });

        $("#class").mobiscroll().select({
            display: 'center',
            group: true,
            headerText: 'Class to book',
            responsive: {
                xsmall: { //0px
                    display: 'bottom',
                    animate: 'slideup'
                },
                large: { //992px
                    display: 'center',
                    animate: 'pop'
                }
            },
            onSet: function (event) {
                $("#class").val(event.valueText);
                let category = event.valueText;
                const locationPicker = '[name^=locationPicker]';
                let selected = [];
                $(locationPicker).each(function () {
                    const selectedValues = $(this).mobiscroll('getInst').getVal();
                    let tmp = selectedValues.filter(function(e){return selected.indexOf(e)<0});
                    selected.push.apply(selected, tmp);
                });
                let filtered = [];
                let tmp2 = locations.filter(function(e){return selected.indexOf(e.name)>-1 && e.class.indexOf(category.toLowerCase()) > -1}).map(function(loc) {return loc.name});
                filtered.push.apply(filtered, tmp2);
                $(locationPicker).each(function () {
                    $(this).mobiscroll('getInst').setVal(filtered);
                    $(this).mobiscroll('getInst').refresh(getLocationsForCategory(category));
                });
            },
        });
        $("#locationPicker1").mobiscroll().select(locationPicker_settings);
        $("#locationPicker1").mobiscroll('getInst').clear();
        $("#datePicker1").mobiscroll().range(range_settings);

        if (window.location.pathname.indexOf('/g2') > -1)
            $("#class").val("G2");

        $(document).on("mouseenter", "#addPeriod", { passive: true }, function () {
            $('.period-popup').show();
            return false;
        });

        $(document).on("mouseleave", "#addPeriod", { passive: true }, function () {
            $('.period-popup').hide();
            return false;
        });

        $(document).on("click", "#addPeriod", { passive: true }, function () {
            $('.period-popup').css('visibility', 'hidden');
            let $inserted = $(this).closest(".period").clone().insertAfter($(this).closest(".period"));
            $(this).addClass('hidden');
            $inserted.find(".hidden").removeClass('hidden');
            $inserted.find('select').val($(this).closest(".period").find('[name^=locationPicker]').val());
            $inserted.find("[name^=datePicker]").each(function () {
                let idx = $(".time input, .location select").index($(this));
                $(this).attr("name", 'datePicker'+idx);
                $(this).attr("id", 'datePicker'+idx);
                $(this).mobiscroll().range(range_settings);
            });
            $inserted.find("[name^=locationPicker]").each(function () {
                let idx = $(".time input, .location select").index($(this));
                $(this).attr("name", 'locationPicker'+idx);
                $(this).attr("id", 'locationPicker'+idx);
                $(this).mobiscroll().select(locationPicker_settings);
                $(this).mobiscroll('getInst').refresh(getLocationsForCategory($("#class").val()))
            });
        });

        $(document).on("click", "#removePeriod", { passive: true },function () {
            removePeriod(this);
        });

        $(document).on("click", "#nearby", { passive: true }, function (e, clickedIndex) {
            // Try HTML5 geolocation.
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    $("#nearby").addClass("disabled");
                    let my_location = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    let radius = 50000;
                    let minutes = 60;
                    let category = $("#class").val().toLowerCase();
                    let filtered_locations = getLocationsWithinRadius(my_location, radius, category);
                    if (filtered_locations.length > 0)
                        calculateDistance(my_location, filtered_locations).then(function(response) {
                            let results = response.rows[0].elements;
                            let output = [];
                            for (let i=0; i<results.length; i++) {
                                if(results[i].duration_in_traffic.value <= minutes*60)
                                    output.push(filtered_locations[i].name);
                            }
                            if (output.length > 0) {
                                $('#locationPicker1').mobiscroll('setVal', output.join(', '));
                                setLocations($('#locationPicker1').mobiscroll('getInst'), output);
                                $('#locationPicker1').mobiscroll('hide');
                            } else {
                                disableGeo();
                                handleLocationError("No DriveTest centres found withing 1 hour drive from your location. Pick your preferred locations manually.");
                            }
                        });
                    else {
                        disableGeo();
                        handleLocationError("No DriveTest centres found withing 1 hour drive from your location. Pick your preferred locations manually.");
                    }
                },function (error) {
                    let error_text;
                    switch(error.code) {
                        case error.PERMISSION_DENIED:
                            error_text = "You need to allow Geolocation in order to use this feature.";
                            break;
                        case error.POSITION_UNAVAILABLE:
                            error_text = "Location information is unavailable.";
                            break;
                        case error.TIMEOUT:
                            error_text = "The request to get user location timed out.";
                            break;
                        case error.UNKNOWN_ERROR:
                            error_text = "An unknown error occurred.";
                            break;
                    }
                    handleLocationError(error_text);
                });
            } else {
                handleLocationError("Browser doesn't support Geolocation required for this feature");
            }
        });

        if (localStorage.getItem('unpaid') == "true")
            $("#checkout").removeClass("hidden");

        if (localStorage.getItem('geo') == "disabled") {
            $('#locationPicker1').hide();
        }

        if (window.self != window.top) {
            $(document.body).addClass("in-iframe");
        }

        $.getScript('//connect.facebook.net/en_US/sdk.js', function () {
            try {
                FB.init({
                    appId: '337205089986571',
                    version: 'v2.8',
                    cookie: true,
                    status: true,
                    xfbml: true
                });
            } catch (err) {
                console.log(err)
            }
        });


    }

    $('#order-form').on('submit', function (ev) {
        if ($(this).valid()) {
            ev.preventDefault();
            goog_report_conversion();
            let order_info = buildData();
            $.ajax({
                headers: { Accept: "text/javascript; charset=utf-8" },
                type: 'POST',
                cache: false,
                dataType: 'json',
                url: "https://api.bookroadtest.ca/myapp/rest/post",
                data: order_info,
                beforeSend: function() {
                    $("#submit").button('loading');
                    localStorage.setItem('requestedTime', order_info.requestedTime);
                    localStorage.setItem('class', order_info.class);
                    localStorage.setItem('email', order_info.email);
                }
            }).done(function(data) {
                localStorage.setItem('orderId', data.orderId);
                localStorage.setItem('unpaid', true);
                ga('send', 'event', {
                    'eventCategory': 'order',
                    'eventAction': 'made',
                    'eventLabel': 'order made',
                    'hitCallback': gotoPayment
                });
                setTimeout(gotoPayment, 5000);
            }).fail(function(jqXHR, textStatus, errorThrown ) {
                order_info.responseText = jqXHR.responseText;
                order_info.headers = jqXHR.getAllResponseHeaders();
                order_info.status = jqXHR.status;
                order_info.textStatus = textStatus;
                order_info.errorThrown = errorThrown;
                $.ajax({
                    type: 'POST',
                    headers: { Accept: "text/javascript; charset=utf-8" },
                    cache: false,
                    dataType: 'json',
                    data: order_info,
                    url: "https://script.google.com/macros/s/AKfycbztFZH3KK6WMWpook6eeLprXruhqIlKOW5ZVKxV_Rou7vPVeMU/exec"
                }).done(function(data) {
                    if (data.result == 'success') {
                        localStorage.setItem('orderId', data.orderId);
                        ga('send', 'event', {
                            'eventCategory': 'order',
                            'eventAction': 'made',
                            'eventLabel': 'order made via ga script',
                            'hitCallback': gotoPayment
                        });
                        setTimeout(gotoPayment, 2000);
                    }
                }).fail(function(jqXHR, textStatus) {
                    $("#error").slideDown();
                    $("#submit").button('reset');
                    notifyError(textStatus);
                });
            })
        }
    }).validate({
        errorClass: 'mbsc-err-msg',
        errorPlacement: function (error, element) {
            element.parent().append(error);
        },
        highlight: function (element) {
            $(element).closest('.mbsc-input').addClass("mbsc-err");
        },
        unhighlight: function (element) {
            $(element).closest('.mbsc-input').removeClass("mbsc-err");
        },
        rules: {
            licenceNumber: {
                exactlength: 17,
                required: true,
            },
            licenceExpiryDate: {
                dateISO: true
            }
        },
        messages: {
            licenceNumber: {
                required: 'Licence number is required',
            },
            licenceExpiryDate: {
                required: 'Expiry date is required',
                dateISO: 'Invalid date format'
            },
            email: {
                required: 'Email address is required',
                email: 'Invalid email address'
            },
            locationPicker: {
                required: 'You need to pick at least one location'
            }
        }
    });

});

function buildData() {
    let requestedTime = [];
    $('.row.period').each(function() {
        const period = $(this).find($("[name^=datePicker]")).mobiscroll('getVal');
        const from = mobiscroll.util.datetime.formatDate('yy-mm-dd', period[0]);
        const to = mobiscroll.util.datetime.formatDate('yy-mm-dd', period[1]);
        $.each($(this).find($('[name^=locationPicker]')).val(), function(index, option) {
            requestedTime.push(option + "," + from + "," + to);
        });
    });
    return {
        licenceNumber: $('#licenceNumber').val(),
        licenceExpiryDate: $('#licenceExpiryDate').val(),
        class: $('#class').val(),
        email: $('#email').val(),
        requestedTime: JSON.stringify(requestedTime),
        ref: localStorage.getItem("ref"),
        fbUser: isFacebookUser(),
        http_referrer: localStorage.getItem("from"),
        pathname: window.location.pathname
    };
}

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

function saveRefId() {
    let ref, from;
    try {
        const params = new URLSearchParams(location.search);
        ref = params.get("ref");
    } catch(e) {
        ref = getURLParameter('ref');
    }
    if (ref) {
        if (!localStorage.getItem("ref"))
            localStorage.setItem("ref", ref);
    }
    from = document.referrer;
    if (!localStorage.getItem("from"))
        localStorage.setItem("from", from);
}

function gotoPayment() {
    localStorage.setItem('unpaid', true);
    location.href = "payment";
}

function notifyError(errorMessage) {
    $.ajax({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        type: "POST",
        url: "https://script.google.com/macros/s/AKfycbx3LTxHAW78xp7BEggtE4yxg9b51y_yXDDV5NdAD9g8G9wm-rja/exec",
        dataType: "json",
        data: { error: JSON.stringify(errorMessage), userAgent: navigator.userAgent }
    });
}

// function updateCategory(category) {
//     $('[name^=locationPicker]').each(function () {
//         $(this).mobiscroll('getInst').refresh(getLocationsForCategory(category));
//     });
// }

function removePeriod(e) {
    $(e).closest(".period").remove();
    $(".period").last().find("#addPeriod.hidden").removeClass('hidden');
}

function getLocationsForCategory(category) { //сделать через фильтр
    let result = locations.filter(function(location) {
        let cat = category.toLowerCase();
        switch(cat) {
            case 'Az':
                cat = 'a';
                break;
            case 'Bz':
                cat = 'b';
                break;
            case 'Cz':
                cat = 'c';
                break;
            case 'Dz':
                cat = 'd';
                break;
            case 'Ez':
                cat = 'e';
                break;
            case 'Fz':
                cat = 'f';
                break;
        }
        if(location.class.indexOf(cat) > -1)
            return location;
    }).map(function (e) {
        return {
            text: e.name,
            value: e.name,
            group: e.region
        }
    });
    return result;
}

function isFacebookUser() {
    let result = false;
    try {
        FB.getLoginStatus(function(response) {
            if (response.status === 'not_authorized' || response.status === 'connected')
                result = true
        })
    } catch(err){return false}
    return result;
}

goog_snippet_vars = function() {
    var w = window;
    w.google_conversion_id = 868572342;
    w.google_conversion_label = "uQFeCIzT7WsQtrmVngM";
    w.google_remarketing_only = false;
};

// DO NOT CHANGE THE CODE BELOW.
goog_report_conversion = function(url) {
    goog_snippet_vars();
    window.google_conversion_format = "3";
    var opt = new Object();
    opt.onload_callback = function() {
        if (typeof(url) != 'undefined') {
            window.location = url;
        }
    };
    var conv_handler = window['google_trackConversion'];
    if (typeof(conv_handler) == 'function') {
        conv_handler(opt);
    }
};


function disableGeo() {
    localStorage.setItem("geo", "disabled");
    $("#nearby").prop("disabled", true);
}

function handleLocationError(error) {
    $("#warning p").html("<strong>Warning!</strong> "+error);
    $("#warning").slideDown();
}

function calculateDistance(from, locations) {
    let dest_coordinates = locations.map(function(location) { return location.position });
    let origin = from;
    let dfd = $.Deferred();
    let service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [origin],
        destinations: dest_coordinates,
        travelMode: 'DRIVING',
        drivingOptions: {departureTime: new Date(Date.now())},
        avoidHighways: false,
        avoidTolls: true,
    }, function(response, status) {
        if (status == google.maps.DistanceMatrixStatus.OK)
            dfd.resolve(response);
        else
            dfd.reject(status);
    });
    return dfd.promise();
}

function getLocationsWithinRadius(center, radius, category) {
    let result = [];
    cat = category[category.length-1] == 'z' ? category.substring(0, 1) : category;
    result = locations.filter(function(location) {
        if (location.class.indexOf(cat) > -1) {
            if (google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(location.position), new google.maps.LatLng(center)) <= radius) {
                return location;
            }
        }
    });
    return result;
}