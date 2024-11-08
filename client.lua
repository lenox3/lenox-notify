local QBCore = exports['qb-core']:GetCoreObject()

function Notify(text, type, length)
    type = type or 'primary'
    length = length or 5000
    SendNUIMessage({
		text = text,
        type = type,
		length = length
	})
end

exports('Notify', Notify)

RegisterCommand('testnotifications', function()
    QBCore.Functions.Notify('Success', 'success', 7500)
    QBCore.Functions.Notify('Warning', 'warning', 12000)
    QBCore.Functions.Notify('Error', 'error', 7500)
    QBCore.Functions.Notify('Primary', 'primary', 7500)
end)