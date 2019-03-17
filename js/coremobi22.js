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

    if (window.location.pathname.indexOf('/index') > -1 || window.location.pathname === '/' || window.location.pathname.indexOf('/s') > -1) {

        $('#order-form').mobiscroll().form({
            inputStyle: 'outline',
            labelStyle: 'stacked',
            theme: 'ios'
        });

        $("#demo-non-form").mobiscroll().select({
            display: 'bottom',
            animate: 'slideup',
            group: true,
            headerText: 'Class to book',
            responsive: {
                xsmall: {
                    display: 'bottom',
                    group: true,
                    animate: 'slideup'
                },
                large: {
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
            }
        });

    }
});

function getLocationsForCategory(category) {
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