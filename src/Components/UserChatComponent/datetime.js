export default class DateTime {
    static get_datetime = () => {
        let datetime = new Date (), parts = [String (''), datetime.getDate (), datetime.getFullYear (), datetime.getHours (), datetime.getMinutes ()];
		switch (datetime.getMonth () + 1) {
            // January.
            case 1:
                parts[0] = "January";
                break;
            // Febuary.
            case 2:
                parts[0] = "Febuary";
                break;
            // March.
            case 3:
                parts[0] = "March";
                break;
            // April.
            case 4:
                parts[0] = "April";
                break;
            // May.
            case 5:
                parts[0] = "May";
                break;
            // June.
            case 6:
                parts[0] = "June";
                break;
            // July.
            case 7:
                parts[0] = "July";
                break;
            // August.
            case 8:
                parts[0] = "August";
                break;
            // September.
            case 9:
                parts[0] = "September";
                break;
            // October.
            case 10:
                parts[0] = "October";
                break;
            // November.
            case 11:
                parts[0] = "November";
                break;
            // December.
            case 12:
                parts[0] = "Décember";
                break;
            // Unknown month.
            default:
                parts[0] = "--------";
                break;
        }
        // Returns the final result.
        return (parts[0] + ' ' + parts[1] + ", " + parts[2] + ' ' + parts[3] + ':' + parts[4]);
    }
}
