import azure.functions as func
from azure.cosmos import CosmosClient

def main(req: func.HttpRequest) -> func.HttpResponse:
    # Azure Cosmos DB connection settings
    cosmos_url = "cosmos_db_url"
    cosmos_key = "cosmos_db_key"
    database_name = "VisitorCounter"
    container_name = "count"
    partition_key = "/id"

    # Create Cosmos DB client
    client = CosmosClient(cosmos_url, cosmos_key)
    database = client.get_database_client(database_name)
    container = database.get_container_client(container_name)

    # Query Cosmos DB to get the current count
    query = f"SELECT * FROM c WHERE c.id = 'current_count'"
    items = list(container.query_items(query, enable_cross_partition_query=True))

    if items:
        # Update existing count
        count_item = items[0]
        count_item['count'] = count_item.get('count', 0) + 1
        container.replace_item(item=count_item, body=count_item)

    else:
        # Create a new count item
        count_item = {'id': 'current_count', 'count': 1}
        container.create_item(body=count_item)

    return func.HttpResponse(f"Visitor count: {count_item['count']}", status_code=200)
