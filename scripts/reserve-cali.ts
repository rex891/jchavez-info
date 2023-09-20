import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts"
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
const { args } = await new Command()
    .name("cliffy")
    // .option("-f, --facility-id <facility:integer>", "Id number of facility")
    // One required and one optional command argument.
    .arguments(
        "<facility-id:string> <start-date:string> <number-nights:integer>",
    )
    .parse(Deno.args)

const [FacilityId, StartDate, numNights] = args

const date = new Date(StartDate)
date.setDate(date.getDate() + numNights - 1)
const EndDate = date.toISOString().split("T")[0]

const body = JSON.stringify({
    IsADA: false,
    MinVehicleLength: 0,
    UnitCategoryId: 0,
    StartDate,
    WebOnly: true,
    UnitTypesGroupIds: [],
    SleepingUnitId: 0,
    EndDate,
    UnitSort: "orderby",
    InSeasonOnly: true,
    FacilityId,
    RestrictADA: false,
})
const headers = new Headers([
    ["Accept", "application/json"],
    ["Accept-Encoding", "gzip, deflate"],
    ["Accept-Language", "en-US,en;q=0.9"],
    ["Content-Length", "" + body.length],
    ["Content-Type", "application/json"],
    ["Origin", "https://reservecalifornia.com"],
    ["Referer", "https://reservecalifornia.com/"],
    [
        "Sec-Ch-Ua",
        '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
    ],
    ["Sec-Ch-Ua-Mobile", "?0"],
    ["Sec-Ch-Ua-Platform", '"macOS"'],
    ["Sec-Fetch-Dest", "empty"],
    ["Sec-Fetch-Mode", "cors"],
    ["Sec-Fetch-Site", "cross-site"],
    [
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
    ],
])
let showedFacilityName = false
while (true) {
    console.log(new Date())

    let data = await fetch(
        "https://calirdr.usedirect.com/RDR/rdr/search/grid",
        {
            method: "POST",
            headers,
            body,
        },
    )

    const response = await data.json()
    if (!showedFacilityName) {
        console.log(response.Facility.Name)
        showedFacilityName = true
    }

    const units = response.Facility.Units

    loop1:
    for (const unitId in units) {
        const unit = units[unitId]
        for (const date in unit.Slices) {
            if (!unit.Slices[date].IsFree) continue loop1
        }
        console.log(units[unitId].Name)
        // if (unit.Name.includes("#37")) console.log(unit.Name, unit.Slices)
        // if (!Object.keys(unit.Slices).length) {
        //     console.log(units[unitId].Name)
        // }
    }
    await sleep(15000)
}
export {}
