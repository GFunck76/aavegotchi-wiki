

interface Table {
    tableName: string
    tableData: TableData[]
}

interface TableData {
    headers: any
    data: any
}

export const tables
    = [
	
		{
            tableName: "gotchiTheGaatherer",
            tableCaption: "",
            tableData: {
                headers: ["Score Tiers", "XP earned"],
                data: [
                    [">350 points", "5 XP"],
					["Top 500", "10 XP"]
                ]
            }
        },
	
	    {
            tableName: "snaake",
            tableCaption: "",
            tableData: {
                headers: ["Score Tiers", "XP earned"],
                data: [
                    [">500 points", "5 XP"],
					["Top 500", "10 XP"]
                ]
            }
        },
	
        {
            tableName: "sushiVader",
            tableCaption: "",
            tableData: {
                headers: ["Score Tiers", "XP earned"],
                data: [
                    [">5000 points", "5 XP"],
					["Top 500", "10 XP"],
					["Top 50", "15 XP"]
                ]
            }
        },	
	
        {
            tableName: "whacARofl",
            tableCaption: "",
            tableData: {
                headers: ["Score Tiers", "XP earned"],
                data: [
                    [">100 points", "5 XP"],
					["Top 500", "10 XP"],
					["Top 100", "15 XP"],
					["Top score", "15 XP + XP Potion"]
                ]
            }
        },
		
		{
            tableName: "astegotchi",
            tableCaption: "",
            tableData: {
                headers: ["Score Tiers", "XP earned"],
                data: [
                    [">10,000 points", "5 XP"],
					["Top 500", "10 XP"],
					["Top 100", "15 XP"]
                ]
            }
        },

    ]